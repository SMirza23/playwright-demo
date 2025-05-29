@bing
Feature: Bing Search

  Scenario: Search for Playwright
    Given the user is on Bing home page
    When the user searches for "Playwright testing"
    Then search results should be visible
