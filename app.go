package ozbonds

import (
	"log"
	"net/http"
	"path"
)

func init() {
	http.HandleFunc("/.well-known/acme-challenge/", letsEncryptHandler)
}

func letsEncryptHandler(w http.ResponseWriter, r *http.Request) {
	log.Print(path.Base(r.URL.Path))
	switch path.Base(r.URL.Path) {
	case "23evrIwkgjfAF7dfgtDYHMLe0X9fSOb1RQ-0-LCDnEs":
		w.Write([]byte("23evrIwkgjfAF7dfgtDYHMLe0X9fSOb1RQ-0-LCDnEs.bVSWcev0D89-Az2rCn-7O6lvgP17vsd0TjC30rFfyFg"))
	case "pKvAcAeSHjday7esPL0Dj8QiAUUYY3TdLfHKDXcFDXo":
		w.Write([]byte("pKvAcAeSHjday7esPL0Dj8QiAUUYY3TdLfHKDXcFDXo.bVSWcev0D89-Az2rCn-7O6lvgP17vsd0TjC30rFfyFg"))
	default:
		http.NotFound(w, r)
	}
}
