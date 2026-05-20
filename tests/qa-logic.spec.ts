import { test, expect } from '@playwright/test';

test.describe('QA logic practice questions', () => {
  test('Question 1 - HTTP Status Code Categorizer', async () => {
    function categorizeStatusCode(code: number): string {
      if (code >= 200 && code <= 299) return 'Success';
      if (code >= 300 && code <= 399) return 'Redirection';
      if (code >= 400 && code <= 499) return 'Client Error';
      if (code >= 500 && code <= 599) return 'Server Error';
      return 'Invalid';
    }

    expect(categorizeStatusCode(404)).toBe('Client Error');
    expect(categorizeStatusCode(200)).toBe('Success');
  });

  test('Question 2 - Test Case Pass/Fail Verdict', async () => {
    function getTestVerdict(expected: string, actual: string): string {
      if (expected === actual) {
        return '✅ Test Passed';
      }

      return `❌ Test Failed — Expected: ${expected}, Got: ${actual}`;
    }

    expect(getTestVerdict('Login Successful', 'Login Successful')).toBe('✅ Test Passed');
    expect(getTestVerdict('Login Successful', 'Invalid Credentials'))
      .toBe('❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials');
  });

  test('Question 3 - Bug Severity Classifier', async () => {
    function classifyBugSeverity(score: number): string {
      if (score >= 9 && score <= 10) return 'Severity: Critical — Block release';
      if (score >= 7 && score <= 8) return 'Severity: High';
      if (score >= 4 && score <= 6) return 'Severity: Medium';
      if (score >= 1 && score <= 3) return 'Severity: Low';
      return 'Invalid score';
    }

    expect(classifyBugSeverity(9)).toBe('Severity: Critical — Block release');
    expect(classifyBugSeverity(5)).toBe('Severity: Medium');
  });

  test('Question 4 - Build Health Reporter', async () => {
    function reportBuildHealth(passPercentage: number): string {
      if (passPercentage === 100) return 'Green Build';
      if (passPercentage >= 90 && passPercentage <= 99) return '🟡 Stable — Investigate failures';
      if (passPercentage >= 70 && passPercentage <= 89) return 'Unstable';
      if (passPercentage < 70) return '🔴 Broken Build — Block deployment';
      return 'Invalid percentage';
    }

    expect(reportBuildHealth(95)).toBe('🟡 Stable — Investigate failures');
    expect(reportBuildHealth(65)).toBe('🔴 Broken Build — Block deployment');
  });

  test('Question 5 - Login Lockout After Failed Attempts', async () => {
    function checkLoginLockout(attempts: number): string {
      if (attempts === 0) return 'Login successful';
      if (attempts >= 3) return '🔒 Account Locked — Contact support';

      const attemptsLeft = 3 - attempts;
      return `${attemptsLeft} attempt${attemptsLeft > 1 ? 's' : ''} left before lockout`;
    }

    expect(checkLoginLockout(2)).toBe('1 attempt left before lockout');
    expect(checkLoginLockout(3)).toBe('🔒 Account Locked — Contact support');
    expect(checkLoginLockout(0)).toBe('Login successful');
  });
});