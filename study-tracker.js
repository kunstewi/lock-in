#!/usr/bin/env node

/**
 * Study Progress Tracker
 * 
 * This script helps you track your learning progress across all topics
 * Run: node study-tracker.js
 */

const fs = require('fs');
const path = require('path');

// Topic configuration
const topics = [
    { name: '01-html', totalQuestions: 300 },
    { name: '01-css', totalQuestions: 615 },
    { name: '02-js', totalQuestions: 966 },
    { name: '03-node-express', totalQuestions: 200 },
    { name: '04-databases', totalQuestions: 350 },
    { name: '04.5-browser-dom', totalQuestions: 0 },
    { name: '05-react', totalQuestions: 420 },
    { name: '06-tailwind', totalQuestions: 600 },
    { name: '07-typescript', totalQuestions: 250 },
    { name: '08-postgres-prisma', totalQuestions: 730 },
    { name: '09-serverless', totalQuestions: 720 },
    { name: '10-advance-db-deployments', totalQuestions: 1000 },
    { name: '11-next-js', totalQuestions: 1000 },
    { name: '12-docker', totalQuestions: 1000 },
    { name: '13-monorepos', totalQuestions: 610 },
    { name: '14-advance-concepts', totalQuestions: 700 },
    { name: '14.5-ci-cd', totalQuestions: 600 },
    { name: '15-open-api', totalQuestions: 620 },
    { name: '15.5-advanced-backend', totalQuestions: 640 },
    { name: '16-ddos-rate-limiting', totalQuestions: 600 },
    { name: '17-grpc-testing', totalQuestions: 700 },
    { name: '18-webrtc', totalQuestions: 630 },
    { name: '19-nginx-scaling', totalQuestions: 900 },
    { name: '20-monitoring-logging', totalQuestions: 900 },
    { name: '21-kubernetes', totalQuestions: 900 },
    { name: '22-exchange-project', totalQuestions: 0 },
    { name: '23-kafka', totalQuestions: 550 },
    { name: '24-zapier-project', totalQuestions: 0 },
    { name: '25-operating-systems', totalQuestions: 500 },
    { name: '26-computer-networks', totalQuestions: 500 },
];

// Progress tracking (you'll update this manually or via a progress.json file)
const progress = {};

// Load progress from file if exists
const progressFile = path.join(__dirname, 'progress.json');
if (fs.existsSync(progressFile)) {
    const savedProgress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
    Object.assign(progress, savedProgress);
}

// Calculate statistics
function calculateStats() {
    let totalQuestions = 0;
    let totalCompleted = 0;
    let totalInProgress = 0;

    topics.forEach(topic => {
        totalQuestions += topic.totalQuestions;
        totalCompleted += progress[topic.name]?.completed || 0;
        totalInProgress += progress[topic.name]?.inProgress || 0;
    });

    const percentComplete = ((totalCompleted / totalQuestions) * 100).toFixed(2);
    const percentInProgress = ((totalInProgress / totalQuestions) * 100).toFixed(2);

    return {
        totalQuestions,
        totalCompleted,
        totalInProgress,
        percentComplete,
        percentInProgress,
    };
}

// Display progress
function displayProgress() {
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║          🎯 LOCK-IN LEARNING PROGRESS TRACKER 🎯          ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    const stats = calculateStats();

    console.log('📊 OVERALL PROGRESS\n');
    console.log(`Total Questions: ${stats.totalQuestions}`);
    console.log(`Completed: ${stats.totalCompleted} (${stats.percentComplete}%)`);
    console.log(`In Progress: ${stats.totalInProgress} (${stats.percentInProgress}%)`);
    console.log(`Remaining: ${stats.totalQuestions - stats.totalCompleted - stats.totalInProgress}\n`);

    // Progress bar
    const barLength = 50;
    const completedBars = Math.floor((stats.totalCompleted / stats.totalQuestions) * barLength);
    const inProgressBars = Math.floor((stats.totalInProgress / stats.totalQuestions) * barLength);
    const remainingBars = barLength - completedBars - inProgressBars;

    console.log('Progress Bar:');
    console.log(
        '█'.repeat(completedBars) +
        '▓'.repeat(inProgressBars) +
        '░'.repeat(remainingBars) +
        ` ${stats.percentComplete}%\n`
    );

    console.log('📚 TOPIC BREAKDOWN\n');
    console.log('Topic                      | Total | Done | In Progress | Remaining | %');
    console.log('─'.repeat(80));

    topics.forEach(topic => {
        const completed = progress[topic.name]?.completed || 0;
        const inProgress = progress[topic.name]?.inProgress || 0;
        const remaining = topic.totalQuestions - completed - inProgress;
        const percent = ((completed / topic.totalQuestions) * 100).toFixed(1);

        const topicName = topic.name.padEnd(25);
        const total = String(topic.totalQuestions).padStart(5);
        const doneStr = String(completed).padStart(4);
        const inProgressStr = String(inProgress).padStart(11);
        const remainingStr = String(remaining).padStart(9);
        const percentStr = String(percent).padStart(5);

        console.log(
            `${topicName} | ${total} | ${doneStr} | ${inProgressStr} | ${remainingStr} | ${percentStr}%`
        );
    });

    console.log('\n💡 STUDY INSIGHTS\n');

    // Calculate estimated completion time
    const questionsPerDay = 200; // Adjust based on your pace
    const daysRemaining = Math.ceil(
        (stats.totalQuestions - stats.totalCompleted) / questionsPerDay
    );
    const weeksRemaining = Math.ceil(daysRemaining / 7);

    console.log(`At ${questionsPerDay} questions/day:`);
    console.log(`  - Days to completion: ${daysRemaining}`);
    console.log(`  - Weeks to completion: ${weeksRemaining}`);
    console.log(`  - Estimated completion: ${getEstimatedDate(daysRemaining)}\n`);

    // Daily progress tracking
    const metadata = getMetadata();
    const questionsCompletedToday = calculateTodayProgress(stats.totalCompleted, metadata);
    const expectedQuestionsToDate = calculateExpectedProgress(metadata.startDate, questionsPerDay);
    const progressDifference = stats.totalCompleted - expectedQuestionsToDate;
    const statusEmoji = progressDifference >= 0 ? '✅' : '⚠️';

    console.log(`Questions Completed Today: ${questionsCompletedToday}`);
    console.log(`Expected Questions Solved Till Date (${questionsPerDay}/day): ${expectedQuestionsToDate}`);
    console.log(`Your Progress: ${stats.totalCompleted} ${statusEmoji} (${progressDifference >= 0 ? '+' : ''}${progressDifference} vs expected)\n`);
}

// Get estimated completion date
function getEstimatedDate(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Get or create metadata for progress tracking
function getMetadata() {
    const metadataFile = path.join(__dirname, 'progress-metadata.json');
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    if (fs.existsSync(metadataFile)) {
        const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
        return metadata;
    } else {
        // Create initial metadata
        const initialMetadata = {
            startDate: today,
            lastUpdated: today,
            yesterdayTotal: 0,
            dailyLog: {}
        };
        fs.writeFileSync(metadataFile, JSON.stringify(initialMetadata, null, 2));
        return initialMetadata;
    }
}

// Calculate questions completed today
function calculateTodayProgress(currentTotal, metadata) {
    const today = new Date().toISOString().split('T')[0];

    // If last updated was today, use yesterday's total
    if (metadata.lastUpdated === today) {
        return currentTotal - (metadata.yesterdayTotal || 0);
    } else {
        // If it's a new day, assume yesterday's total was the last known total
        return currentTotal - (metadata.dailyLog[metadata.lastUpdated] || 0);
    }
}

// Calculate expected progress based on start date and questions per day
function calculateExpectedProgress(startDate, questionsPerDay) {
    const start = new Date(startDate);
    const today = new Date();

    // Calculate days since start (inclusive)
    const daysSinceStart = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;

    return Math.max(0, daysSinceStart * questionsPerDay);
}

// Update metadata when progress changes
function updateMetadata(currentTotal) {
    const metadataFile = path.join(__dirname, 'progress-metadata.json');
    const today = new Date().toISOString().split('T')[0];
    const metadata = getMetadata();

    // If it's a new day, save yesterday's total
    if (metadata.lastUpdated !== today) {
        metadata.yesterdayTotal = metadata.dailyLog[metadata.lastUpdated] || 0;
    }

    // Update daily log and last updated date
    metadata.dailyLog[today] = currentTotal;
    metadata.lastUpdated = today;

    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));
}


// Update progress (interactive)
function updateProgress() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log('\n📝 UPDATE PROGRESS\n');
    console.log('Available topics:');
    topics.forEach((topic, index) => {
        console.log(`${index + 1}. ${topic.name}`);
    });

    readline.question('\nSelect topic number (or 0 to cancel): ', topicNum => {
        const index = parseInt(topicNum) - 1;

        if (index === -1) {
            readline.close();
            return;
        }

        if (index < 0 || index >= topics.length) {
            console.log('Invalid topic number');
            readline.close();
            return;
        }

        const topic = topics[index];

        readline.question(`Completed questions for ${topic.name}: `, completed => {
            readline.question(`In-progress questions for ${topic.name}: `, inProgress => {
                progress[topic.name] = {
                    completed: parseInt(completed) || 0,
                    inProgress: parseInt(inProgress) || 0,
                };

                // Save progress
                fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));

                // Update metadata for daily tracking
                const stats = calculateStats();
                updateMetadata(stats.totalCompleted);

                console.log('\n✅ Progress updated and saved!\n');

                readline.close();
                displayProgress();
            });
        });
    });
}

// Main menu
function main() {
    const args = process.argv.slice(2);

    if (args[0] === 'update') {
        updateProgress();
    } else if (args[0] === 'help') {
        console.log('\nUsage:');
        console.log('  node study-tracker.js        - Display progress');
        console.log('  node study-tracker.js update - Update progress');
        console.log('  node study-tracker.js help   - Show this help\n');
    } else {
        displayProgress();
    }
}

main();

/**
 * Usage:
 * 
 * 1. View progress:
 *    node study-tracker.js
 * 
 * 2. Update progress:
 *    node study-tracker.js update
 * 
 * 3. The script saves progress to progress.json
 * 
 * Tips:
 * - Update your progress daily
 * - Track both completed and in-progress questions
 * - Use this to stay motivated and see your progress
 * - Adjust questionsPerDay based on your actual pace
 */
