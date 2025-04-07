package com.cslearningguide.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.cslearningguide.R;
import com.cslearningguide.model.SubTopic;

import java.util.List;

public class SubTopicAdapter extends RecyclerView.Adapter<SubTopicAdapter.SubTopicViewHolder> {

    private Context context;
    private List<SubTopic> subtopicList;
    private SubTopicClickListener clickListener;

    public interface SubTopicClickListener {
        void onSubTopicClick(SubTopic subtopic);
    }

    public SubTopicAdapter(Context context, List<SubTopic> subtopicList, SubTopicClickListener clickListener) {
        this.context = context;
        this.subtopicList = subtopicList;
        this.clickListener = clickListener;
    }

    @NonNull
    @Override
    public SubTopicViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_subtopic, parent, false);
        return new SubTopicViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull SubTopicViewHolder holder, int position) {
        SubTopic subtopic = subtopicList.get(position);
        holder.titleTextView.setText(subtopic.getTitle());
        holder.descriptionTextView.setText(subtopic.getDescription());
        
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (clickListener != null) {
                    clickListener.onSubTopicClick(subtopic);
                }
            }
        });
    }

    @Override
    public int getItemCount() {
        return subtopicList.size();
    }

    public static class SubTopicViewHolder extends RecyclerView.ViewHolder {
        TextView titleTextView;
        TextView descriptionTextView;

        public SubTopicViewHolder(@NonNull View itemView) {
            super(itemView);
            titleTextView = itemView.findViewById(R.id.subtopicTitleTextView);
            descriptionTextView = itemView.findViewById(R.id.subtopicDescriptionTextView);
        }
    }
}
