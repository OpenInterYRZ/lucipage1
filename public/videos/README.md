# Video Assets for LUCI Solution Section

This directory should contain the 4 demonstration videos for the LUCI workflow steps.

## Required Files

Please add your recorded demonstration videos with these exact filenames:

1. **see-demo.mp4** - Video demonstrating the "See" step (auto-recording meetings)
2. **remember-demo.mp4** - Video demonstrating the "Remember" step (extracting information)
3. **act-demo.mp4** - Video demonstrating the "Act" step (executing tasks)
4. **notify-demo.mp4** - Video demonstrating the "Notify" step (sending updates)

## Video Specifications

### Recommended Format
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio**: 16:9
- **File Size**: Keep under 10MB per video for optimal web performance
- **Duration**: 30-60 seconds per video recommended

### Optimization Tips
1. Use a video compression tool to reduce file size while maintaining quality
2. Consider using tools like HandBrake or FFmpeg for compression
3. Test the videos in the browser to ensure smooth playback

## Adding Videos

1. Record your demonstration videos
2. Compress them to meet the file size requirements
3. Rename them to match the filenames above
4. Place them in this `/public/videos/` directory

## Testing

After adding videos, test the section by:
1. Running `pnpm dev`
2. Navigating to `http://localhost:3000`
3. Scrolling to the "How LUCI Works" section
4. Verifying each video plays correctly with controls

## Placeholder Videos

If you need placeholder videos for testing before creating the real ones, you can:
1. Create short screen recordings of your desktop
2. Use stock video footage (ensure licensing allows)
3. Create simple animated videos

The video player will handle any valid MP4 video file.
