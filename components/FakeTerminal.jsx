import { useState, useEffect, useRef, useCallback } from 'react';
import { useTerminal } from '../context/TerminalContext';
import styles from '../styles/FakeTerminal.module.css';

// ── Boot animation lines ─────────────────────────────────────────────────────
const BOOT_LINES = [
  '$ ./mvnw test',
  '[INFO] Tests run: 42, Failures: 0, Errors: 0, Skipped: 0',
  '[INFO] BUILD SUCCESS',
  '',
  '$ docker compose up -d',
  '[+] Running 3/3',
  '✔ Container portfolio-api started',
  '✔ Container postgres started',
  '✔ Container frontend started',
];

// ── Command dictionary ───────────────────────────────────────────────────────
function runCommand(cmd) {
  const token = cmd.trim().toLowerCase();

  if (token === '') return null;

  if (token === 'help') {
    return [
      'Available commands:',
      '  help      — show this message',
      '  whoami    — who is Anas Tag?',
      '  ls        — list portfolio sections',
      '  skills    — technical skill set',
      '  contact   — email, LinkedIn, and GitHub',
      '  clear     — clear the terminal',
    ].join('\n');
  }

  if (token === 'whoami') {
    return [
      'Anas Tag — Full-Stack & Backend Software Engineer',
      'Location: Longueuil, Québec, Canada',
      'Focus: Java/Spring Boot, React, TypeScript, Node.js, cloud delivery, and reliable business applications.',
    ].join('\n');
  }

  if (token === 'ls') {
    return [
      'portfolio/',
      '  projects/  — Madrasti MMS, Scootry, Fennec Go',
      '  github/    — repositories and contribution activity',
      '  resume/    — downloadable résumé',
      '  contact/   — email, LinkedIn, and GitHub',
    ].join('\n');
  }

  if (token === 'skills') {
    return [
      'Frontend:',
      'React, TypeScript, JavaScript, React Native, HTML, CSS',
      '',
      'Backend:',
      'Java 17/21, Spring Boot, Node.js, Express.js, REST APIs, JWT authentication, API integration',
      '',
      'Data:',
      'PostgreSQL, MongoDB, MySQL, SQL, relational and NoSQL data modeling',
      '',
      'Cloud and Delivery:',
      'AWS, Docker, Jenkins, CI/CD, Git, Linux, Kubernetes',
      '',
      'Testing and Engineering Practices:',
      'Unit testing, integration testing, Playwright end-to-end testing, debugging, production support, Agile delivery, AI-assisted development tools',
      '',
      'Languages:',
      'English — Professional',
      'French — Intermediate',
    ].join('\n');
  }

  if (token === 'contact') {
    return [
      'Email: taganas2002@gmail.com',
      'LinkedIn: https://www.linkedin.com/in/tag-anas/',
      'GitHub: https://github.com/Taganas2002',
    ].join('\n');
  }

  if (token === 'clear') {
    return '__CLEAR__';
  }

  return `bash: ${cmd.trim()}: command not found  (try 'help')`;
}

// ── Prompt sub-components (styled spans) ─────────────────────────────────────
function Prompt() {
  return (
    <span>
      <span className={styles.promptUser}>anas</span>
      <span className={styles.promptAt}>@</span>
      <span className={styles.promptPath}>portfolio</span>
      <span className={styles.promptAt}>:</span>
      <span className={styles.promptPath}>~</span>
      <span className={styles.promptSuffix}>$ </span>
    </span>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
const FakeTerminal = () => {
  const { isOpen, toggleTerminal } = useTerminal();

  // Boot animation state
  const [bootLines, setBootLines]   = useState([]);
  const [bootDone, setBootDone]     = useState(false);

  // Interactive history: array of { cmd: string, output: string|null }
  const [history, setHistory]       = useState([]);
  const [inputValue, setInputValue] = useState('');

  const intervalRef = useRef(null);
  const bodyRef     = useRef(null);
  const inputRef    = useRef(null);

  // ── Boot animation ──────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      // Reset every time the terminal opens
      setBootLines([]);
      setBootDone(false);
      setHistory([]);
      setInputValue('');

      let index = 0;
      intervalRef.current = setInterval(() => {
        index += 1;
        setBootLines(BOOT_LINES.slice(0, index));
        if (index >= BOOT_LINES.length) {
          clearInterval(intervalRef.current);
          setBootDone(true);
        }
      }, 120);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isOpen]);

  // ── Auto-focus input after boot ─────────────────────────────────────────
  useEffect(() => {
    if (bootDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [bootDone]);

  // ── Auto-scroll ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [bootLines, history]);

  // ── Command execution ────────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();

      const cmd    = inputValue;
      const output = runCommand(cmd);

      if (output === '__CLEAR__') {
        setBootLines([]);
        setHistory([]);
        setInputValue('');
        return;
      }

      setHistory((prev) => [...prev, { cmd, output }]);
      setInputValue('');
    },
    [inputValue],
  );

  // ── Click anywhere in body focuses input ────────────────────────────────
  const handleBodyClick = useCallback(() => {
    if (bootDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [bootDone]);

  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.tabActive}>TERMINAL</span>
          <span className={styles.shell}>bash</span>
        </div>
        <div className={styles.headerRight}>
          <button
            className={styles.closeBtn}
            onClick={toggleTerminal}
            aria-label="Close terminal"
          >
            ×
          </button>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body} ref={bodyRef} onClick={handleBodyClick}>
        {/* Boot animation lines */}
        {bootLines.map((line, i) => (
          <div key={`boot-${i}`} className={styles.line}>
            {line || ' '}
          </div>
        ))}

        {/* Interactive history */}
        {bootDone &&
          history.map((entry, i) => (
            <div key={`hist-${i}`} className={styles.historyEntry}>
              <div className={styles.historyCmd}>
                <Prompt />
                {entry.cmd}
              </div>
              {entry.output != null && (
                <div
                  className={
                    entry.output.includes('command not found')
                      ? `${styles.historyOutput} ${styles.error}`
                      : styles.historyOutput
                  }
                >
                  {entry.output}
                </div>
              )}
            </div>
          ))}

        {/* Live input row (only after boot) */}
        {bootDone && (
          <div className={styles.inputRow}>
            <Prompt />
            <input
              ref={inputRef}
              className={styles.inputField}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
            <span className={styles.cursor} aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeTerminal;
