(ns articles.form.events
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-event-db
 ::update-form
 (fn [db [_ id val]]
   (assoc-in db [:form id] val)))