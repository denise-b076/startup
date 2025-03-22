const AppEvent = {
    System: 'system',
    User: 'user',
};

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}
