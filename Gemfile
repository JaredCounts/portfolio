source "https://rubygems.org"

gem "jekyll", "~> 3.8.5"

# hack to get jekyll-assets to work
gem "sprockets", "~> 3.7"

# plugins
group :jekyll_plugins do
    gem 'jekyll-commonmark'
    gem "jekyll-assets", "~> 3.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", "~> 1.2"
    gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
