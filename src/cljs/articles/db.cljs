(ns articles.db)

(def default-db
  {:articles [{:article/id 1
               :article/title "My first article"
               :article/excerpt "time to be living man"
               :article/image-url "https://www.hdnicewallpapers.com/Walls/Normal/Cat/Beautiful_Angry_Kitten.jpg"
               :article/author "On the code again"
               :article/body "Body of the article"
               :article/date-created "14 july 1989"
               :article/tags ["super" "awesome" "article"]}
              {:article/id 2
               :article/image-url "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia1.santabanta.com%2Ffull1%2FAnimals%2FCats%2Fcats-85a.jpg&f=1&nofb=1"
               :article/title "My Second article"
               :article/author "Jeremy Mags"
               :article/excerpt "time to chill"
               :article/body "Body of the article"
               :article/date-created "15 july 1989"
               :article/tags ["super" "awesome" "article"]}]})


