(ns articles.articles-index.subs
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-sub
 ::articles
 (fn [db _]
   (:articles db)))