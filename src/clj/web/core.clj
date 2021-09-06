(ns web.core
  (:require [reitit.ring :as ring]
            [reitit.middleware :as middleware]
            [muuntaja.core :as m]
            [aleph.http :as http]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [mount.core :as mount]
            [clojure.java.io :as io]
            [database.core :as db]))

(defn index-handler [_]
  {:body (slurp (io/resource "public/index.html"))})

(defn list-article-handler [_]
  {:body (db/query '{:find [(pull ?e [*])]
                     :where [[?e :article/id _]]})})

(defn create-handler [{:keys [body-params]}]
  (let [tx (db/write body-params)]
    (clojure.pprint/pprint tx)
    (db/write body-params)
    {:body body-params}))

(def app
  (ring/ring-handler
   (ring/router
    [["/articles" {:middleware [:content]}
      ["/" {:get list-article-handler}]
      ["/create" {:post create-handler}]]
     ["/assets/*" (ring/create-resource-handler {:root "public/assets"})]
     ["/" {:get index-handler}]]
    {::middleware/registry {:content muuntaja/format-middleware}
     :data {:muuntaja m/instance}})))

(mount/defstate server
  :start (http/start-server #'app {:port 8123})
  :stop (.close server))

(defn -main [& _]
  (mount/start))
