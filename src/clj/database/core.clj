(ns database.core
  (:require [crux.api :as crux]
            [mount.core :as mount]))

(mount/defstate node :start (crux/start-node {}))

(defn ensure-id [{:keys [:crux.db/id] :as entity}]
  (let [uuid (java.util.UUID/randomUUID)]
    (if-not id
      (assoc entity
             :crux.db/id uuid
             :article/id uuid)
      entity)))

(defn write [entity]
  (let [with-id (ensure-id entity)]
    (crux/submit-tx node [[:crux.tx/put with-id]])))

(defn query [query]
  (->> (crux/q
        (crux/db node)
        query)
      (mapv first)))


