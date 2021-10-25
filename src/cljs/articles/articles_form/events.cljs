(ns articles.articles-form.events
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]))


(re-frame/reg-event-db
 ::initialise-edit
 (fn [db [_ article-id]]
   (let [article (first (filter #(= (int article-id) (:article/id %)) (get db :articles [])))]
     (-> db
         (assoc :editing-id (int article-id))
         (assoc :form article)))))


(re-frame/reg-event-db
 ::initialise-create
 (fn [db _]
   (-> db
       (dissoc  :form)
       (dissoc :editing-id))))


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
         current-tags (get-in db [:form :article/tags] #{})]
     (cond-> db
       new-tag (assoc-in [:form :article/tags] (conj current-tags new-tag))
       :default (dissoc [:form :tag] "")))))

(re-frame/reg-event-db
 ::remove-article-tag
 (fn [db [_ tag]]
   (let [current-tags (get-in db [:form :article/tags] #{})]
     (assoc-in db [:form :article/tags] (disj current-tags tag)))))

(re-frame/reg-event-fx
 ::save-article
 (fn [{:keys [db]} [_ editing-id]]
   (let [form-data (:form db)
         article (if editing-id (assoc  form-data :aticle/date-created (get-date)) form-data)
         uri (if editing-id "/articles/update" "/articles/create")]
     {:http-xhrio {:method          :POST
                   :uri             uri
                   :timeout         8000
                   :params          article
                   :format          (ajax/transit-request-format)
                   :response-format (ajax/transit-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                   :on-success      [::saved-article]
                   :on-failure      [:api-fail]}})))

(re-frame/reg-event-db
 ::saves-article
 (fn [db [_ result]]
   (assoc db :success-http-result result)))
