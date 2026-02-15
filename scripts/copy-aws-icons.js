#!/usr/bin/env node

/**
 * Script to copy AWS icons from aws-svg-icons npm package to public/aws-icons
 */

const fs = require('fs');
const path = require('path');

const iconMappings = [
  { target: 'Amazon-SageMaker.svg', source: 'Arch_Machine-Learning/48/Arch_Amazon-SageMaker_48.svg' },
  // Bedrock not available in 2021 package - will need to download separately
  { target: 'Amazon-S3.svg', source: 'Arch_Storage/48/Arch_Amazon-Simple-Storage-Service_48.svg' },
  { target: 'Amazon-EC2.svg', source: 'Arch_Compute/48/Arch_Amazon-EC2_48.svg' },
  { target: 'Amazon-ECS.svg', source: 'Arch_Containers/48/Arch_Amazon-Elastic-Container-Service_48.svg' },
  { target: 'Amazon-Redshift.svg', source: 'Arch_Analytics/Arch_48/Arch_Amazon-Redshift_48.svg' },
  { target: 'AWS-Step-Functions.svg', source: 'Arch_App-Integration/Arch_48/Arch_AWS-Step-Functions_48.svg' },
  { target: 'Amazon-Athena.svg', source: 'Arch_Analytics/Arch_48/Arch_Amazon-Athena_48.svg' },
  { target: 'Amazon-RDS.svg', source: 'Arch_Database/48/Arch_Amazon-RDS_48.svg' },
  { target: 'AWS-Lambda.svg', source: 'Arch_Compute/48/Arch_AWS-Lambda_48.svg' },
  { target: 'Amazon-VPC.svg', source: 'Arch_Networking-Content-Delivery/48/Arch_Amazon-Virtual-Private-Cloud_48.svg' },
  { target: 'Amazon-CloudFront.svg', source: 'Arch_Networking-Content-Delivery/48/Arch_Amazon-CloudFront_48.svg' },
  { target: 'Amazon-DynamoDB.svg', source: 'Arch_Database/48/Arch_Amazon-DynamoDB_48.svg' },
  { target: 'IAM.svg', source: 'Arch_Security-Identity-Compliance/48/Arch_AWS-Identity-and-Access-Management_48.svg' },
];

const baseDir = path.join(__dirname, '../node_modules/aws-svg-icons/lib/Architecture-Service-Icons_07302021');
const outputDir = path.join(__dirname, '../public/aws-icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let successCount = 0;
let failCount = 0;

iconMappings.forEach(({ target, source }) => {
  const sourcePath = path.join(baseDir, source);
  const targetPath = path.join(outputDir, target);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ Copied ${target}`);
    successCount++;
  } else {
    console.log(`✗ Not found: ${source}`);
    failCount++;
  }
});

console.log(`\nComplete! ${successCount} icons copied, ${failCount} failed.`);
if (failCount > 0) {
  console.log('\nNote: Amazon-Bedrock is not available in the 2021 icon set.');
  console.log('You may need to download it manually from aws-icons.com');
}
