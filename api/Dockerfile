FROM python:3.8.2

WORKDIR /api
 
ENV FLASK_APP=datetime_api.py 

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "todo_list_api.py" ]
