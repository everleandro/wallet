<template>
    <div class="proof-document">
        <div v-if="$device.isMobileOrTablet">
            <e-card class="document-file-card">
                <template v-if="data.image">
                    <div class="document-file-card__image">
                        <img :src="data.image.src" alt="proof-image">
                    </div>
                    <e-spacer />
                    <div>
                        <p class="my-3">{{ data.image.name }}</p>
                    </div>
                    <e-button :icon="$icon.delete" color="white" class="secondary" @click="removeImg()"></e-button>
                </template>
                <template v-else>
                    <form action="">
                        <input ref="input" type="file" id="upload-photo" name="picture" accept="image/*"
                            capture="environment" @change="getImage" />
                        <e-button @click="inputClick" type="button" x-large outlined text color="secondary">
                            <e-icon :icon="$icon.photo"></e-icon>
                        </e-button>
                    </form>
                </template>
            </e-card>
        </div>
        <h3 v-else>
            Continue la verificacion desde su telefono movil
        </h3>

    </div>
</template>
<script lang="ts" setup>
const input = ref<HTMLInputElement>();
const data = reactive({
    file: <Blob | undefined>undefined,
    image: <Record<string, string> | undefined>undefined
})
const emit = defineEmits<{
    (e: 'file', value: Blob | undefined): void,
}>()

watch(() => data.file, (value) => {
    emit('file', value)
})

const inputClick = () => {
    input.value?.click();
}

const removeImg = () => {
    data.file = undefined;
    data.image = undefined;
}

const getImage = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            data.file = new Blob([e.target?.result as string], { type: file.type });
            data.image = {
                src: e.target?.result as string,
                name: file.name
            };
        }
        reader.readAsDataURL(file);
    }
}
</script>
<style lang="scss">
.proof-document {
    input#upload-photo {
        opacity: 0;
        position: absolute;
        z-index: -1;
        width: 0;
    }

    form {
        .e-btn {
            border-style: dashed;
        }
    }

    .document-file-card {
        width: 100%;
        padding: 12px;
        display: grid;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 300px;

        &__image {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        &::before {
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
            background-color: var(--secondary);
            opacity: 0.05;

        }

        img {
            border-radius: 4px;
            height: auto;
            width: 100%;
        }

        .e-btn {
            position: absolute;
            top: 0;
            right: 0;
            margin-top: -8px;
            margin-right: -8px;
            background: white;
        }
    }
}
</style>