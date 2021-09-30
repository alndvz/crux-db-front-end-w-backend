(ns articles.articles-form.subs
  (:require [re-frame.core :as re-frame]))



(re-frame/reg-sub
 ::tag-list
 (fn [db _]
   (get-in db [:form :article/tags] #{})))


(re-frame/reg-sub
 ::edit-id
 (fn [db _]
   (:editing-id db)))