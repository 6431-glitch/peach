FROM python:3.15.1-slim-trixie
RUN pip install --no-cache-dir beautifulsoup4==4.15.0 fastapi==0.162.0 httpx==0.28.1 uvicorn==0.54.0
WORKDIR /app
COPY app.py /app/app.py
USER 65534:65534
ENV PYTHONUNBUFFERED=1
EXPOSE 8080
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080", "--ssl-certfile", "/run/secrets/peach_adult_empire_cert", "--ssl-keyfile", "/run/secrets/peach_adult_empire_key"]
