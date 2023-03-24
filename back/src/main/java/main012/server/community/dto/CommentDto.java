package main012.server.community.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CommentDto {

    @Getter
    @Setter
    public static class Post {
        private Long communityId;
        private String comment;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long commentId;
        private String comment;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private Long commentId;
        private Long memberId;
        private String comment;
        private String displayName;
        private String userImageUrl;
    }

}
