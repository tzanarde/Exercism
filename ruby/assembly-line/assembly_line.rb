class AssemblyLine

  PRODUCTION_COEFFICIENT = 221
  PRODUCTION_SUCCESS_RATE = { 1 => 1, 2 => 1, 3 => 1,
                              4 => 1, 5 => 0.9, 6 => 0.9,
                              7 => 0.9, 8 => 0.9, 9 => 0.8,
                              10 => 0.77 }

  def initialize(speed)
    @speed = speed
  end

  def production_rate_per_hour
    PRODUCTION_COEFFICIENT * @speed * PRODUCTION_SUCCESS_RATE[@speed]
  end

  def working_items_per_minute
    (production_rate_per_hour / 60).floor
  end
end
