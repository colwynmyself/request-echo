FROM denoland/deno:2.6.0

WORKDIR /app

COPY deno.json deno.lock ./
RUN deno install

COPY . .
RUN deno cache src/main.ts

RUN useradd -m colwyn
USER colwyn

EXPOSE 8000

CMD ["deno", "run", "dev"]
