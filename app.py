import os


CHAINLIT_AUTH_SECRET = "jTc7f/nqfi,JcZ$$S~8o%QAsl2JDMMyF^pTH%PmnP:,^M*soRBj.YH.26w3exzCV"
os.environ["CHAINLIT_AUTH_SECRET"] = CHAINLIT_AUTH_SECRET;

# os.environ['CHAINLIT_AUTH_SECRET']='IGm3OVkSTpvJmyyBB-*Nl23YTa1TKDPHUqdbm..zhl7Pcx4/o9uG:Nj6P3SrPPAA'

import chainlit as cl
from langchain_core.messages import AnyMessage, HumanMessage, AIMessage, SystemMessage
from chainlit.playground.providers import Anthropic
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
import websockets



@cl.header_auth_callback
def on_header(a):
    return cl.User(identifier='admin') #, metadata={"lang": accepted_lang})


@cl.on_chat_start
async def start_chat():
    cl.user_session.set(
        "chat_history",
        [
            SystemMessage(
                content="You are a helpful assistant. You can output MARKDOWN, HTML, and latex (ex: $$x^2$$)"
            )
        ],
    )
    await cl.Avatar(
        name="Claude",
        url="https://www.anthropic.com/images/icons/apple-touch-icon.png",
    ).send()


@cl.step(name="Claude", type="llm", root=True)
async def call_claude():
    # prompt_history = cl.user_session.get("prompt_history")
    chat_history = cl.user_session.get("chat_history")  # type: list[AnyMessage]

    chat = ChatAnthropic(
        temperature=0,
        model_name="claude-3-opus-20240229",
        max_tokens=4096
    )
    full_msg = AIMessage(content="")
    chat_history.append(full_msg)
    async for data in chat.astream(chat_history):
        await cl.context.current_step.stream_token(data.content)
        full_msg.content += data.content


@cl.on_message
async def chat(message: cl.Message):
    chat_history = cl.user_session.get("chat_history")  # type: list[AnyMessage]
    chat_history.append(HumanMessage(content=message.content))
    await call_claude()
    # await message.remove()
