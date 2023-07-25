<template>
    <div class="notes">
        <div class="container">
            <div class="notes__top">
                <h2 class="notes__title">Все заметки</h2>
                <button @click="grid = !grid" class="notes__btn">
                    <img v-if="grid" src="../assets/img/list.svg" alt="">
                    <img v-else src="../assets/img/grid.svg" alt="">
                    <span>{{ grid ? 'Список': 'Сетка' }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                grid: true
            }
        }
    }
</script>

<style lang="scss">
.notes {
    margin-top: 30px;
    
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    &__title {
        color: #323232;
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
    }
    
    &__btn {
        border-radius: 16px;
        background:  linear-gradient(0deg, rgba(103, 80, 164, 0.11) 0%, rgba(103, 80, 164, 0.11) 100%), #FFFBFE;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
        padding: 16px 20px 16px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--m-3-sys-light-primary, #6750A4);
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.1px;
    }
}
</style>