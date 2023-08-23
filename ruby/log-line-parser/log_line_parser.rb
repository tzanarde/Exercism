class LogLineParser
  def initialize(message)
     @message = message
  end

  def message
    @message.split(':').last
            .strip
  end

  def log_level
    @message.split(':').first
            .gsub('[', '')
            .gsub(']', '')
            .downcase
  end

  def reformat
    "#{message} (#{log_level})"
  end
end
