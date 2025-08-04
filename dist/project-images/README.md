# Project Images Gallery

This directory contains images for your mechanical engineering project gallery.

## How to Add Your Project Images

1. **Image Format**: Use JPG, PNG, or WebP format for best compatibility
2. **Image Size**: Recommended size is 800x600 pixels or larger (16:9 aspect ratio works well)
3. **File Naming**: Use descriptive names like:
   - `bobcat-loader.jpg`
   - `avalanche-shelter.jpg`
   - `cooling-tower.jpg`
   - `mechanical-timer.jpg`
   - `shape-charge.jpg`
   - `modal-analysis.jpg`

## Current Placeholder Images

The gallery currently shows placeholder images. To add your actual project images:

1. Replace the placeholder images in this directory with your actual project images
2. Make sure the image filenames match the ones referenced in `ProjectImages.jsx`
3. Or update the `imageUrl` paths in `ProjectImages.jsx` to match your actual image filenames

## Image Categories

The gallery supports filtering by these categories:
- SolidWorks
- ANSYS
- CFD
- AutoCAD
- FEA
- Modal Analysis

You can modify the categories in `ProjectImages.jsx` to match your specific project types.

## Tips for Best Results

- Use high-quality images that clearly show your engineering work
- Include screenshots of CAD models, simulation results, and analysis plots
- Ensure images are well-lit and professional-looking
- Keep file sizes reasonable (under 2MB per image) for fast loading
- Consider adding multiple images per project to show different aspects

## Updating Project Details

To update project descriptions, titles, or details, edit the `projectImages` array in `client/src/components/ProjectImages.jsx`. 