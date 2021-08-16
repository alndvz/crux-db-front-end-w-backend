(ns articles.db)

(def default-db
  {:articles [{:id 1
               :title "My first article"
               :excerpt "time to be living man"
               :image-url "https://www.hdnicewallpapers.com/Walls/Normal/Cat/Beautiful_Angry_Kitten.jpg"
               :author "on the code again"
               :body "Body of the article"
               :date-created "14 july 1989"
               :tags ["super" "awesome" "article"]}
              {:id 2
               :image-url "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia1.santabanta.com%2Ffull1%2FAnimals%2FCats%2Fcats-85a.jpg&f=1&nofb=1"
               :title "My Second article"
               :author "Jeremy Mags"
               :excerpt "time to chill"
               :body "Body of the article"
               :date-created "15 july 1989"
               :tags ["super" "awesome" "article"]}]})
