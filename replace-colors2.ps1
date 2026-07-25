$files = Get-ChildItem -Path "F:\code\portfoliocv\src\components\*.js"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # Catch remaining stone patterns with more specificity
    # Dark mode combined patterns first
    $content = $content -replace 'dark:border-stone-600/30', 'border-gray-300'
    $content = $content -replace 'dark:border-stone-500/30', 'border-gray-300'
    $content = $content -replace 'dark:border-stone-700', 'border-gray-200'
    $content = $content -replace 'dark:border-stone-600', 'border-gray-300'
    $content = $content -replace 'dark:border-stone-500', 'border-gray-400'
    $content = $content -replace 'dark:border-gray-300', 'border-gray-300'
    $content = $content -replace 'dark:text-stone-800', 'text-black'
    $content = $content -replace 'dark:text-stone-200', 'text-gray-700'
    $content = $content -replace 'dark:text-gray-300', 'text-gray-700'
    $content = $content -replace 'dark:text-stone-100', 'text-black'
    $content = $content -replace 'dark:text-stone-300', 'text-gray-600'
    $content = $content -replace 'dark:text-stone-400', 'text-gray-500'
    $content = $content -replace 'dark:from-stone-800', 'from-white'
    $content = $content -replace 'dark:via-stone-800', 'via-white'
    $content = $content -replace 'dark:md:to-stone-800', 'md:to-white'
    $content = $content -replace 'dark:hover:bg-gray-700', 'hover:bg-gray-200'
    $content = $content -replace 'dark:hover:bg-gray-600', 'hover:bg-gray-200'
    $content = $content -replace 'dark:hover:text-gray-300', 'hover:text-black'
    $content = $content -replace 'dark:group-hover:border-stone-500', 'group-hover:border-gray-400'

    # bg-stone patterns
    $content = $content -replace 'bg-stone-900', 'bg-black'
    $content = $content -replace 'bg-stone-950/90', 'bg-black/90'
    $content = $content -replace 'bg-stone-950', 'bg-black'
    $content = $content -replace 'bg-stone-900/80', 'bg-black/80'
    $content = $content -replace 'bg-stone-900/70', 'bg-black/70'
    $content = $content -replace 'bg-stone-900/50', 'bg-black/50'
    $content = $content -replace 'bg-stone-800/50', 'bg-black/50'
    $content = $content -replace 'bg-stone-400/30', 'bg-gray-200'
    $content = $content -replace 'bg-stone-400/10', 'bg-gray-100'
    $content = $content -replace 'bg-stone-300/30', 'bg-gray-100'
    $content = $content -replace 'bg-stone-300', 'bg-gray-300'
    $content = $content -replace 'bg-stone-200/60', 'bg-gray-100'
    $content = $content -replace 'bg-stone-100/50', 'bg-gray-50'
    $content = $content -replace 'bg-stone-100/20', 'bg-gray-50'
    $content = $content -replace 'bg-stone-100', 'bg-white'
    $content = $content -replace 'bg-stone-500/10', 'bg-gray-100'
    $content = $content -replace 'bg-stone-500', 'bg-gray-500'
    $content = $content -replace 'bg-stone-600', 'bg-gray-600'
    $content = $content -replace 'bg-stone-700', 'bg-gray-700'

    # text-stone patterns
    $content = $content -replace 'text-stone-800', 'text-black'
    $content = $content -replace 'text-stone-700', 'text-gray-700'
    $content = $content -replace 'text-stone-600', 'text-gray-600'
    $content = $content -replace 'text-stone-500', 'text-gray-500'
    $content = $content -replace 'text-stone-400', 'text-gray-400'
    $content = $content -replace 'text-stone-300', 'text-gray-300'
    $content = $content -replace 'text-stone-200', 'text-gray-200'
    $content = $content -replace 'text-stone-100', 'text-white'
    $content = $content -replace 'text-stone-900', 'text-black'

    # border-stone patterns
    $content = $content -replace 'border-stone-700', 'border-gray-200'
    $content = $content -replace 'border-stone-600', 'border-gray-300'
    $content = $content -replace 'border-stone-500', 'border-gray-400'
    $content = $content -replace 'border-stone-400', 'border-gray-400'
    $content = $content -replace 'border-stone-300', 'border-gray-300'
    $content = $content -replace 'border-stone-200', 'border-gray-200'
    $content = $content -replace 'border-stone-800', 'border-gray-200'

    # ring-stone
    $content = $content -replace 'ring-stone-900', 'ring-white'
    $content = $content -replace 'ring-stone-700', 'ring-gray-200'

    # hover-stone
    $content = $content -replace 'hover:bg-stone-700', 'hover:bg-gray-700'
    $content = $content -replace 'hover:bg-stone-600', 'hover:bg-gray-600'
    $content = $content -replace 'hover:bg-stone-500', 'hover:bg-gray-500'
    $content = $content -replace 'hover:bg-stone-300', 'hover:bg-gray-300'
    $content = $content -replace 'hover:bg-stone-200', 'hover:bg-gray-200'
    $content = $content -replace 'hover:text-stone-200', 'hover:text-black'
    $content = $content -replace 'hover:text-stone-700', 'hover:text-black'
    $content = $content -replace 'hover:text-stone-500', 'hover:text-black'
    $content = $content -replace 'hover:text-stone-300', 'hover:text-black'
    $content = $content -replace 'hover:text-stone-100', 'hover:text-white'
    $content = $content -replace 'hover:border-stone-500', 'hover:border-gray-400'
    $content = $content -replace 'hover:border-stone-400', 'hover:border-gray-400'

    # from/to/via stone
    $content = $content -replace 'from-stone-900/90', 'from-black/90'
    $content = $content -replace 'from-stone-900/80', 'from-black/80'
    $content = $content -replace 'from-stone-900', 'from-black'
    $content = $content -replace 'from-stone-100', 'from-white'
    $content = $content -replace 'to-stone-100', 'to-white'
    $content = $content -replace 'via-stone-900/30', 'via-black/10'
    $content = $content -replace 'from-stone-500/10', 'from-gray-100'
    $content = $content -replace 'to-stone-500/10', 'to-gray-100'

    # shadow stone
    $content = $content -replace 'shadow-stone', 'shadow-gray'

    # Focus ring
    $content = $content -replace 'focus:border-stone-500', 'focus:border-black'
    $content = $content -replace 'focus:border-stone-400', 'focus:border-black'

    # Clean up double spaces
    $content = $content -replace '  +', ' '

    Set-Content $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "Done!"
