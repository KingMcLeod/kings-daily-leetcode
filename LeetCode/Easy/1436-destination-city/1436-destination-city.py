class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        trip_dict = dict()

        # 1st pass: build out dictionary
        for city, destination in paths:
            if city not in trip_dict:
                trip_dict[city] = []

            if destination not in trip_dict:
                trip_dict[destination] = []    

            trip_dict[city].append(destination)

        # 2nd pass: find destination city
        for city in trip_dict:
            if len(trip_dict[city]) == 0:
                return city
            