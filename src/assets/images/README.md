# Images Directory Structure

This directory contains images used in blog posts and the application.

## Structure

```
src/assets/images/
├── posts/           # Blog post specific images
│   ├── building/    # Images for "building" post
│   ├── privacy/     # Images for "privacy" post
│   └── ...          # Other post directories
└── common/          # Shared images (logos, icons, etc.)
```

## Usage in HTML Posts

### Local Images (Small files, bundled with app)
```html
<img src="/src/assets/images/posts/building/book-cover.jpg" alt="Book Cover" />
```

### Public Images (Larger files, served directly)
```html
<img src="/images/posts/building/large-photo.jpg" alt="Large Photo" />
```

### External Images (Third-party content)
```html
<img src="https://m.media-amazon.com/images/I/413cbFvUADL._SL500_.jpg" alt="Amazon Product" />
```

## Best Practices

1. **Use descriptive filenames**: `book-cover.jpg` instead of `img1.jpg`
2. **Optimize images**: Compress JPGs, use WebP when possible
3. **Include alt text**: Always add meaningful alt attributes
4. **Organize by post**: Keep related images together
5. **Choose appropriate location**:
   - Small images (< 100KB): `src/assets/images/`
   - Large images (> 100KB): `public/images/`
   - External content: Keep external URLs

## Adding New Images

1. Create a subdirectory for your post: `mkdir src/assets/images/posts/new-post`
2. Add your images to the appropriate directory
3. Reference them in your HTML post
4. Images will be automatically available after saving
