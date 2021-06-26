FROM python:3.7-alpine

WORKDIR /api
 
ENV FLASK_APP=datetime_api.py 

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "datetime_api.py" ]
