class Tournament
  def self.tally(input)
    @tally = {}
    @fixtures = input.split("\n")
    create_starting_tally!
    fill_tally!
    sort_tally!
    convert_tally_to_text!
  end

  private

  def self.convert_tally_to_text!
    text_tally = "Team                           | MP |  W |  D |  L |  P\n"
    @tally.each do |team|
      text_tally << "#{team.first.ljust(31)}|#{convert_stat_to_text!(team.last[:MP])}|#{convert_stat_to_text!(team.last[:W])}|#{convert_stat_to_text!(team.last[:D])}|#{convert_stat_to_text!(team.last[:L])}|#{convert_stat_to_text!(team.last[:P])}".strip
      text_tally << "\n"
    end
    text_tally
  end

  def self.convert_stat_to_text!(stat)
    stat.to_s.center(5)[0..stat.to_s.center(5).length - 2]
  end

  def self.fill_tally!
    @fixtures.each do |match|
      home_team = match.split(';')[0]
      away_team = match.split(';')[1]
      match_result = match.split(';')[2]
      if home_team_win?(match_result)
        add_win!(home_team)
        add_loss!(away_team)
      elsif away_team_win?(match_result)
        add_win!(away_team)
        add_loss!(home_team)
      else
        add_draw!(home_team)
        add_draw!(away_team)
      end
    end
  end

  def self.sort_tally!
    @tally = @tally.sort_by { |key, value| [-value[:P], key] }
  end

  def self.home_team_win?(match_result)
    match_result == 'win'
  end

  def self.away_team_win?(match_result)
    match_result == 'loss'
  end

  def self.add_win!(team)
    @tally[team][:MP] += 1
    @tally[team][:W] += 1
    @tally[team][:P] += 3
  end

  def self.add_loss!(team)
    @tally[team][:MP] += 1
    @tally[team][:L] += 1
  end

  def self.add_draw!(team)
    @tally[team][:MP] += 1
    @tally[team][:D] += 1
    @tally[team][:P] += 1
  end

  def self.create_starting_tally!
    @fixtures.each do |match|
      home_team = match.split(';')[0]
      away_team = match.split(';')[1]
      match_result = match.split(';')[2]
      add_team_to_tally!(home_team)
      add_team_to_tally!(away_team)
    end
  end

  def self.add_team_to_tally!(team)
    @tally["#{team}"] = {MP: 0, W: 0, D: 0, L: 0, P: 0} unless @tally.has_key? team
  end
end
