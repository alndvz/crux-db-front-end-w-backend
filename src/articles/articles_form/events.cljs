(ns articles.articles-form.events
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-event-db
 ::initialise-edit
 (fn [db [_ article-id]]
   (let [article (first (filter #(= (int article-id) (:id %)) (get db :articles [])))]
     (-> db
         (assoc :editing-id (int article-id))
         (assoc :form article)))))


(re-frame/reg-event-db
 ::initialise-create
 (fn [db _]
   (dissoc db :form)))


(defn get-date []
  (let [month-names ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dev"]
        date (new js/Date)
        day (-> date (.getDate))
        month (-> date (.getMonth) month-names)
        year (-> date (.getFullYear))]
    (str day " " month " " year)))


(re-frame/reg-event-db
 ::save-article-tag
 (fn [db _]
   (let [new-tag (get-in db [:form :tag] nil)
         current-tags (get-in db [:form :tags] #{})]
     (cond-> db
       new-tag (assoc-in [:form :tags] (conj current-tags new-tag))
       :default (dissoc [:form :tag] "")))))

(re-frame/reg-event-db
 ::remove-article-tag
 (fn [db [_ tag]]
   (let [current-tags (get-in db [:form :tags] #{})]
     (assoc-in db [:form :tags] (disj current-tags tag)))))

(defn save-new-article [db]
  (let [last-article-id (get (apply max-key :id (:articles db)) :id 0)
        article (-> (:form db)
                    (assoc :date-created (get-date))
                    (assoc :id (inc last-article-id)))
        current-articles (get db :articles [])]
    (-> db
        (assoc :articles (conj current-articles article))
        (dissoc :form))))

(defn update-article [db id]
  (let [article (:form db)
        article-ids (map #(:id %) (:articles db))
        article-index (.indexOf article-ids id)
        updated-articles (assoc (:articles db) article-index article)]
    (assoc db :articles updated-articles)))

(re-frame/reg-event-db
 ::save-article
 (fn [db [_ editing-id]]
   (let [updated-db (if editing-id (update-article db editing-id) (save-new-article db))]
     updated-db)))