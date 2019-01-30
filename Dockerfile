FROM golang as builder
WORKDIR /go/src/github.com/dgpc/ozbonds
COPY app.go .
RUN CGO_ENABLED=0 GOOS=linux go build -v -o app

FROM alpine
COPY --from=builder /go/src/github.com/dgpc/ozbonds/app /app
COPY *.html css js /
ENV PORT 8080
CMD ["/app"]
