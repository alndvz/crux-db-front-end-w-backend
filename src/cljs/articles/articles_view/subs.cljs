(ns articles.articles-view.subs
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-sub
 ::select-article
 (fn [db [_ article-id]]
   (->> (:articles db)
        (filter #(= (:id %) article-id))
        first)))

