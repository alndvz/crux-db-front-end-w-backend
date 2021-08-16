(ns articles.articles-index.events
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]))


(re-frame/reg-event-fx
 ::load-articles
 (fn [{:keys [db]} _]
   (println "hello")
   {:http-xhrio {:method          :get
                 :uri             "/articles/"
                 :timeout         8000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::store-articles]
                 :on-failure      [:bad-http-result]}}))

(re-frame/reg-event-db
 ::store-articles
 (fn [db [_ result]]
   (assoc db :articles result)))


