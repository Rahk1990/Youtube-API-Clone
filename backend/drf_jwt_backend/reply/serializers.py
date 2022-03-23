from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
   class Meta:
      model = Reply
      fields = ['id', 'comment_id', 'text', 'user_id'] 
      depth = 1

   comment_id = serializers.IntegerField(write_only = True)