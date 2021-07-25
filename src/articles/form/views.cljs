(ns articles.form.views
  (:require [re-frame.core :as re-frame]
            [articles.form.subs :as subs]
            [articles.form.events :as events]))



(defn field-control [id label control]
  (let [value (re-frame/subscribe [::subs/form id])
        update-form #(re-frame/dispatch [::events/update-form id (-> % .-target .-value)])]
    [:div.field
     [:label.label label]
     [:div.control
      (control value update-form)]]))

(defn text-input [id label]
  (field-control id label
                 (fn [value update-form] [:input.input {:value @value
                                                        :on-change update-form
                                                        :type "text" :placeholder ""}])))


(defn select-input [id label options]
  (field-control id label (fn [value update-form]
                            [:div.select
                             [:select {:value @value :on-change update-form}
                              [:option {:value ""} "Please select"]
                              (map (fn [o] [:option {:key o :value o} o]) options)]])))


(defn text-area [id label]
  (field-control id label (fn [value update-form]
                            [:textarea.textarea {:value @value
                                                 :on-change update-form
                                                 :type "text" :placeholder ""}])))
