from collections import deque
from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        course_graph = {}      # key = prereq, value = list of courses unlocked
        indegree_count = {}   # key = course, value = number of prereqs

        # step 1: initialize all courses
        for i in range(numCourses):
            course_graph[i] = []
            indegree_count[i] = 0

        # step 2: build graph + indegree
        for i in range(len(prerequisites)):
            current_course = prerequisites[i][0]   # a (what we want to take)
            course_prereq = prerequisites[i][1]    # b (what we must take first)

            # build graph: prereq -> course
            course_graph[course_prereq].append(current_course)

            # increase indegree (this course has one more prereq)
            indegree_count[current_course] += 1

        # step 3: find courses with NO prereqs
        queue = deque()

        for course in indegree_count:
            if indegree_count[course] == 0:
                queue.append(course)

        # step 4: process courses
        courses_taken = 0

        while queue:
            current = queue.popleft()
            courses_taken += 1

            # go through courses unlocked by this course
            for neighbor in course_graph[current]:
                indegree_count[neighbor] -= 1  # remove prereq

                # if no more prereqs, we can take it
                if indegree_count[neighbor] == 0:
                    queue.append(neighbor)

        # if we took all courses → no cycle
        return courses_taken == numCourses