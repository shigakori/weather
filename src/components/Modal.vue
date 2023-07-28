<template>
    <div class="modal">
        <div class="modal__form">
            <h3 class="modal__title">Добавить заметку</h3>
            <div class="modal__content">
                <label>
                    <span>Title</span>
                    <input type="text" placeholder="Tile">
                </label>
                <label>
                    <span>Content</span>
                    <textarea rows="1" placeholder="Content"></textarea>
                </label>
            </div>
            <div class="modal__controls">
                <button class="modal__btn modal__btn_red">Отмена</button>
                <button class="modal__btn">Добавить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.modal {
    background: rgba(0, 0, 0, 0.35);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>