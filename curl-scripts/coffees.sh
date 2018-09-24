
curl --include --request POST "https://wdi-library-api.herokuapp.com/books/" \
  --header "Content-type: application/json" \
  --data '{
    "coffee": {
      "roaster": "'"${ROASTER}"'",
      "blend":  "'"${BLEND}"'",
      "favorite" "'"${FAVORITE}"'",
      "rating" "'"${RATING}"'"
    }
  }'

echo
