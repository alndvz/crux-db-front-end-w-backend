(ns articles.articles-index.subs
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]))


(re-frame/reg-sub
 ::articles
 (fn [db _]
   (:articles db)))


(re-frame/reg-event-fx                             ;; note the trailing -fx
 ::load-articles
 (fn [{:keys [db]} _]                    ;; the first param will be "world"
   {:db   (assoc db :show-twirly true)   ;; causes the twirly-waiting-dialog to show??
    :http-xhrio {:method          :get
                 :uri             "/articles/"
                 :timeout         8000                                           ;; optional see API docs
                 :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                 :on-success      [::store-articles]
                 :on-failure      [:bad=]}}))