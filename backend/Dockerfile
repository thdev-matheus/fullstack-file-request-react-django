FROM python:3.11.0

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/app

COPY . /usr/app

RUN pip install -U pip
RUN pip install -r requirements.txt
RUN pip install --upgrade pip