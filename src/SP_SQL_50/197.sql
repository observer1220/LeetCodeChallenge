-- Write your PostgreSQL query statement below
SELECT today.id FROM Weather AS today, Weather AS yesterday
WHERE today.recordDate - yesterday.recordDate = 1
AND today.temperature > yesterday.temperature;