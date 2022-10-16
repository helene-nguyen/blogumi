interface ArticleProps {
    username: string;
    content: string;
    role: string;
}

export default class CreationModel {
    checkedRole: boolean;

    constructor(_props: ArticleProps) {
        this.checkedRole = this.isAdminRole(_props);
    }

    private isAdminRole(props: ArticleProps): boolean {
        return props.role === 'admin';
    }

}