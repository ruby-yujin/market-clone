from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()




# 정적인 파일을 받아서 웹서버에서 보여주기
app.mount("/",StaticFiles(directory="frontend",html=True), name="frontend")