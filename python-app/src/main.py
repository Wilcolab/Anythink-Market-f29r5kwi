from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Task(BaseModel):
    text: str

class TasksResponse(BaseModel):
    tasks: List[str]

tasks: List[str] = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure",
]

@app.get("/", tags=["root"])
def read_root():
    return {"message": "Hello World"}

@app.post("/tasks", status_code=201, tags=["tasks"])
def add_task(task: Task):
    tasks.append(task.text)
    return {"message": "Task added successfully", "task": task.text}

@app.get("/tasks", response_model=TasksResponse, tags=["tasks"])
def list_tasks():
    return TasksResponse(tasks=tasks)
