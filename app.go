package ozbonds

import "net/http"

func init() {
	http.HandleFunc("/", notFoundHandler)
}

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	http.NotFound(w, r)
}
