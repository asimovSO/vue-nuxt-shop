<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">
                Copyright © {{ new Date().getFullYear() }}
            </p>
        </template>
        <template #right>
            <div>
                <UButton
                    icon="i-mdi-instagram"
                    color="neutral"
                    variant="ghost"
                    to="https://www.instagram.com/predictgimm"
                    target="_blank"
                    aria-label="X"
                />
                <UButton
                    icon="i-mdi-github"
                    color="neutral"
                    variant="ghost"
                    to="https://github.com/asimovSO"
                    target="_blank"
                    aria-label="X"
                />
                <UButton
                    icon="i-mdi-linkedin"
                    color="neutral"
                    variant="ghost"
                    to="https://www.linkedin.com/in/svitashov-oleg-5a6a59324/"
                    target="_blank"
                    aria-label="X"
                />
            </div>
        </template>
    </UFooter>
</template>
