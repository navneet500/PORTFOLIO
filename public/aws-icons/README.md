# AWS Icons Setup Guide

This directory contains AWS service icons from [aws-icons.com](https://aws-icons.com/).

## How to Add AWS Icons

1. **Visit [aws-icons.com](https://aws-icons.com/)**
2. **Download the SVG icons** for the following AWS services:
   - Amazon-SageMaker.svg
   - Amazon-Bedrock.svg
   - Amazon-S3.svg
   - Amazon-EC2.svg
   - Amazon-ECS.svg
   - Amazon-Redshift.svg
   - AWS-Step-Functions.svg
   - Amazon-Athena.svg
   - Amazon-RDS.svg
   - AWS-Lambda.svg
   - Amazon-VPC.svg
   - Amazon-CloudFront.svg
   - Amazon-DynamoDB.svg
   - IAM.svg

3. **Place the SVG files** in this directory (`public/aws-icons/`)

4. **File naming**: Make sure the filenames match exactly:
   - `Amazon-SageMaker.svg` ✓ (copied from npm package)
   - `Amazon-Bedrock.svg` ✓ (downloaded from awsicon.com)
   - `Amazon-S3.svg` ✓ (copied from npm package)
   - `Amazon-EC2.svg` ✓ (copied from npm package)
   - `Amazon-ECS.svg` ✓ (copied from npm package)
   - `Amazon-Redshift.svg` ✓ (copied from npm package)
   - `AWS-Step-Functions.svg` ✓ (copied from npm package)
   - `Amazon-Athena.svg` ✓ (copied from npm package)
   - `Amazon-RDS.svg` ✓ (copied from npm package)
   - `AWS-Lambda.svg` ✓ (copied from npm package)
   - `Amazon-VPC.svg` ✓ (copied from npm package)
   - `Amazon-CloudFront.svg` ✓ (copied from npm package)
   - `Amazon-DynamoDB.svg` ✓ (copied from npm package)
   - `IAM.svg` ✓ (copied from npm package)

**Note**: All icons have been successfully downloaded and are ready to use. The Amazon-Bedrock icon was downloaded from awsicon.com to replace the initial placeholder.

## Alternative: Using PNG Icons

If you prefer PNG icons, you can:
1. Download PNG versions from aws-icons.com
2. Update the file paths in `data/skills.ts` to use `.png` extension instead of `.svg`

## Notes

- Icons are sourced from [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)
- Icons are owned by Amazon Web Services, Inc.
- The component will automatically handle missing icons with a fallback placeholder
