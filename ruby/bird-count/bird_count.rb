class BirdCount
  LAST_WEEK = [0, 2, 5, 3, 7, 8, 4]

  def self.last_week
    LAST_WEEK
  end

  def initialize(bird_count)
    @bird_count = bird_count
  end

  def yesterday
    @bird_count[-2]
  end

  def total
    @bird_count.sum
  end

  def busy_days
    @bird_count.count { |birds_of_the_day| birds_of_the_day >= 5}
  end

  def day_without_birds?
    @bird_count.any? { |birds_of_the_day| birds_of_the_day == 0 }
  end
end
