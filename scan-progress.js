#!/usr/bin/env node

/**
 * Auto Progress Scanner
 * 
 * Scans all README.md files for question markers and automatically updates progress.json
 * 
 * Usage:
 *   node scan-progress.js
 * 
 * How to mark questions in README files:
 *   ✅ Question text - Marks as "Done/Completed"
 *   ⚠️ Question text - Marks as "Familiar/In Progress"
 *   ❌ Question text - Marks as "Need to Learn/Not Started"
 *   
 * Or use text markers:
 *   [DONE] Question text
 *   [FAMILIAR] Question text
 *   [TODO] Question text
 * 
 * The script will:
 * 1. Scan all topic folders for README.md files
 * 2. Count marked questions
 * 3. Update progress.json automatically
 * 4. Show summary
 */

const fs = require('fs');
const path = require('path');

// Topic directories to scan
const topics = [
    { name: '01-html-css', dir: '01-html-css' },
    { name: '02-js', dir: '02-js' },
    { name: '03-node-express', dir: '03-node-express' },
    { name: '04-databases', dir: '04-databases' },
    { name: '04.5-browser-dom', dir: '04.5-browser-dom' },
    { name: '05-react', dir: '05-react' },
    { name: '06-tailwind', dir: '06-tailwind' },
    { name: '07-typescript', dir: '07-typescript' },
    { name: '08-postgres-prisma', dir: '08-postgres-prisma' },
    { name: '09-serverless', dir: '09-serverless' },
    { name: '10-advance-db-deployments', dir: '10-advance-db-deployments' },
    { name: '11-next-js', dir: '11-next-js' },
    { name: '12-docker', dir: '12-docker' },
    { name: '13-monorepos', dir: '13-monorepos' },
    { name: '14-advance-concepts', dir: '14-advance-concepts' },
    { name: '14.5-ci-cd', dir: '14.5-cicd' },
    { name: '15-open-api', dir: '15-open-api' },
    { name: '15.5-advanced-backend', dir: '15.5-advanced-backend-websocket' },
    { name: '16-ddos-rate-limiting', dir: '16-ddos-rate-limiting' },
    { name: '17-grpc-testing', dir: '17-grpc-testing' },
    { name: '18-webrtc', dir: '18-webrtc' },
    { name: '19-nginx-scaling', dir: '19-nginx-scaling' },
    { name: '20-monitoring-logging', dir: '20-monitoring-logging' },
    { name: '21-kubernetes', dir: '21-kubernetes' },
    { name: '22-exchange-project', dir: '22-exchange-project' },
    { name: '23-kafka', dir: '23-kafka' },
    { name: '24-zapier-project', dir: '24-zapier-project' },
    { name: '25-operating-systems', dir: '25-operating-systems' },
    { name: '26-computer-networks', dir: '26-computer-networks' },
];

const progressFile = path.join(__dirname, 'progress.json');

// Patterns to match
const patterns = {
    done: [
        /^✅\s+\d+\./m,           // ✅ 1. Question
        /^\[DONE\]\s+\d+\./m,     // [DONE] 1. Question
        /^\[✓\]\s+\d+\./m,        // [✓] 1. Question
        /^- \[x\]\s+\d+\./m,      // - [x] 1. Question
    ],
    familiar: [
        /^⚠️\s+\d+\./m,           // ⚠️ 1. Question
        /^\[FAMILIAR\]\s+\d+\./m, // [FAMILIAR] 1. Question
        /^\[~\]\s+\d+\./m,        // [~] 1. Question
        /^- \[~\]\s+\d+\./m,      // - [~] 1. Question
    ],
    todo: [
        /^❌\s+\d+\./m,           // ❌ 1. Question
        /^\[TODO\]\s+\d+\./m,     // [TODO] 1. Question
        /^\[ \]\s+\d+\./m,        // [ ] 1. Question
        /^- \[ \]\s+\d+\./m,      // - [ ] 1. Question
    ]
};

function scanReadme(filePath) {
    if (!fs.existsSync(filePath)) {
        return { done: 0, familiar: 0, todo: 0 };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    let done = 0;
    let familiar = 0;
    let todo = 0;

    lines.forEach(line => {
        // Check for done markers
        if (patterns.done.some(pattern => pattern.test(line))) {
            done++;
        }
        // Check for familiar markers
        else if (patterns.familiar.some(pattern => pattern.test(line))) {
            familiar++;
        }
        // Check for todo markers
        else if (patterns.todo.some(pattern => pattern.test(line))) {
            todo++;
        }
    });

    return { done, familiar, todo };
}

function updateProgress() {
    console.log('\n🔍 SCANNING README FILES FOR PROGRESS MARKERS...\n');

    const progress = {};
    let totalDone = 0;
    let totalFamiliar = 0;
    let totalTodo = 0;
    let scannedTopics = 0;

    topics.forEach(topic => {
        const readmePath = path.join(__dirname, topic.dir, 'README.md');
        const stats = scanReadme(readmePath);

        progress[topic.name] = {
            completed: stats.done,
            inProgress: stats.familiar
        };

        totalDone += stats.done;
        totalFamiliar += stats.familiar;
        totalTodo += stats.todo;

        if (stats.done > 0 || stats.familiar > 0 || stats.todo > 0) {
            console.log(`📚 ${topic.name.padEnd(30)} ✅ ${String(stats.done).padStart(3)}  ⚠️  ${String(stats.familiar).padStart(3)}  ❌ ${String(stats.todo).padStart(3)}`);
            scannedTopics++;
        }
    });

    // Save to progress.json
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));

    console.log('\n' + '─'.repeat(70));
    console.log(`\n📊 SUMMARY:`);
    console.log(`   Topics scanned: ${scannedTopics}`);
    console.log(`   ✅ Completed: ${totalDone}`);
    console.log(`   ⚠️  Familiar/In Progress: ${totalFamiliar}`);
    console.log(`   ❌ Need to Learn: ${totalTodo}`);
    console.log(`   📝 Total marked: ${totalDone + totalFamiliar + totalTodo}`);

    console.log('\n✅ Progress updated in progress.json!\n');

    // Show progress tracker
    console.log('📊 Running progress tracker...\n');
    const { execSync } = require('child_process');
    try {
        execSync('node study-tracker.js', { stdio: 'inherit' });
    } catch (e) {
        // Ignore if study-tracker.js doesn't exist
    }
}

function showHelp() {
    console.log(`
📊 Auto Progress Scanner

USAGE:
  node scan-progress.js

HOW TO MARK QUESTIONS IN README FILES:

Option 1 - Emoji Markers (Recommended):
  ✅ 1. What is JavaScript?        → Marks as completed
  ⚠️ 2. What is closure?           → Marks as familiar/in-progress
  ❌ 3. What is async/await?       → Marks as need to learn

Option 2 - Text Markers:
  [DONE] 1. What is JavaScript?
  [FAMILIAR] 2. What is closure?
  [TODO] 3. What is async/await?

Option 3 - Checkbox Style:
  - [x] 1. What is JavaScript?     → Completed
  - [~] 2. What is closure?        → Familiar
  - [ ] 3. What is async/await?    → Todo

WORKFLOW:
  1. Open a topic's README.md (e.g., 02-js/README.md)
  2. Add markers to questions as you study them
  3. Run: node scan-progress.js
  4. Progress is automatically updated!

EXAMPLE:
  In 02-js/README.md:
  
  ✅ 1. Explain how js gets executed in the browser
  ✅ 2. What can in-browser javascript do
  ⚠️ 3. Explain what are AJAX and COMET
  ❌ 4. What are cookies?
  
  Then run: node scan-progress.js
  
  Result: 2 completed, 1 in-progress, 1 todo

TIPS:
  - Use ✅ for questions you fully understand
  - Use ⚠️ for questions you partially understand
  - Use ❌ for questions you haven't studied yet
  - Run scan-progress.js daily to track your progress
  - Commit your marked README files to git

  `);
}

// Main
const args = process.argv.slice(2);

if (args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
} else {
    updateProgress();
}
